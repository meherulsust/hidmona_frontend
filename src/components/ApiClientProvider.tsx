import { createContext, PropsWithChildren, useContext, useState } from 'react';
import ApiClient from 'lib/apiClient';

const ApiClientContext = createContext<ApiClient | null>(null);

export default function ApiClientProvider({ children }: PropsWithChildren<{}>) {
  const [apiClient] = useState(() => new ApiClient('/api/proxy'));

  return (
    <ApiClientContext.Provider value={apiClient}>
      {children}
    </ApiClientContext.Provider>
  );
}

export function useApiClient() {
  const apiClient = useContext(ApiClientContext);

  if (!apiClient) {
    throw new Error('ApiClientProvider not found');
  }

  return apiClient;
}
