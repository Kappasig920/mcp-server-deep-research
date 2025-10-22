// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Claude } from '../client';

export abstract class APIResource {
  protected _client: Claude;

  constructor(client: Claude) {
    this._client = client;
  }
}
