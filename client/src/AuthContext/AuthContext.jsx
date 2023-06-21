import React, { useState } from 'react';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Передача данных для авторизации в API
    // Успешный ответ сохраняем в состоянии пользователя user:
    setUser(userData);
  };

  const logout = () => {
    // Логика для выхода пользователя из системы
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};