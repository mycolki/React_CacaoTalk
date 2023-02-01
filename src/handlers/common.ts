export function getSession<T>(key: string): T | null {
  const session = window.sessionStorage.getItem(key);

  if (!session) {
    return null;
  }

  return JSON.parse(session);
}

export function setSession(key: string, session: unknown) {
  window.sessionStorage.setItem(key, JSON.stringify(session));
}
