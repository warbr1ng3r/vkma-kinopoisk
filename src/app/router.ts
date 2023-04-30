import { Page, Router } from '@happysanta/router';

import {
  PAGE_RANDOM,
  PAGE_SEARCH,
  PANEL_RANDOM,
  PANEL_SEARCH,
  VIEW_MAIN
} from '#shared/routing/constants';

const routes = {
  [PAGE_SEARCH]: new Page(PANEL_SEARCH, VIEW_MAIN),
  [PAGE_RANDOM]: new Page(PANEL_RANDOM, VIEW_MAIN)
};

export const router = new Router(routes);

router.start();
