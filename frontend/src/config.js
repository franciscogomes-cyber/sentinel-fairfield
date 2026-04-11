// URL base do backend. Em dev (Vite proxy), deixa vazio.
// Em produção, usa a variável de ambiente VITE_API_URL.
export const API_BASE = import.meta.env.VITE_API_URL || ''
