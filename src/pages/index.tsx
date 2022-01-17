import { NextPageComponent } from 'next';

const Home: NextPageComponent = () => {
  return null;
};

Home.pageOptions = {
  redirectIfAuthenticated: true,
  requiresAuth: true,
};

export default Home;
