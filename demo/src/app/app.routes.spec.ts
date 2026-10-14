import { routes } from './app.routes';

describe('app routes', () => {
  it('lists the labelled demo pages shown in the navigation', () => {
    const labelled = routes.filter(({ data }) => data !== undefined && 'label' in data).map((route) => route.path);

    expect(labelled).toEqual(['get-started', 'render', 'playground']);
  });

  it('redirects unknown paths to get-started', () => {
    const wildcard = routes.find((route) => route.path === '**');

    expect(wildcard?.redirectTo).toBe('get-started');
  });
});
