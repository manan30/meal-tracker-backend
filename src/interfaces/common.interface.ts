import { Router } from 'express';

export interface RouteType {
  tag: string;
  router: Router;
}
