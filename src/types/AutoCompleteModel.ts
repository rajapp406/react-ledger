import { KeyValue } from './keyValue';

export interface AutoCompleteModel {
  url?: string;
  limit?: number;
  serverSide?: boolean;
  data: KeyValue<string, string>[];
  onSearch?: (s: string) => void;
}

export class AutoCompleteImpl implements AutoCompleteModel {
  limit: number = 10;
  data: KeyValue<string, string>[] = [];
  serverSide: boolean = false;
  url = '';
  constructor(config: AutoCompleteModel) {
    this.data = config.data;
    if (config.limit) {
      this.limit = config.limit;
    }
    if (config.serverSide !== undefined) {
      this.serverSide = config.serverSide;
      if (this.serverSide && config.url) {
        this.url = config.url;
      }
    }
  }
}
