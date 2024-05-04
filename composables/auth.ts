import { jwtDecode } from "jwt-decode";

export const useUser = () => useState<User | null>("user", () => null);

export const useAuth = () => {
  const user = useUser();
  const session = useCookie("session");

  const isExpired = (token: string) => {
    const decoded: {exp: number} = jwtDecode(token);
    return Date.now() >= decoded.exp * 1000;
  };

  const signIn = async (credentials: { identifier: string, password: string }) => {
    try {
      const response = await fetch(`${API_URL}/api/auth/local`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const { error } = await response.json();
        throw new Error(error.message);
      }

      const { jwt, user: userData } = await response.json();
      session.value = jwt;
      user.value = userData;

      useNotyf.success(messages.login);

      navigateTo("/logged");
    } catch (error) {
      useNotyf.error((error as Error).message);
    }
  };

  const signOut = () => {
    session.value = null;
    user.value = null;
    useNotyf.success(messages.logout);
    navigateTo("/");
  };

  const me = async () => {
    if (!session.value) {
      return;
    }

    if (isExpired(session.value)) {
      session.value = null;
      user.value = null;
      useNotyf.error(messages.sessionExpired);
      navigateTo("/login");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/users/me`, {
        headers: {
          Authorization: `Bearer ${session.value}`,
        },
      });

      if (!response.ok) {
        const { error } = await response.json();
        throw new Error(error.message);
      }

      const data = await response.json();
      user.value = data;
    } catch (error) {
      session.value = null;
      useNotyf.error((error as Error).message);
    }
  };

  return {
    signIn,
    signOut,
    me,
  };
};