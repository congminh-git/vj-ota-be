import { AsyncLocalStorage } from 'async_hooks';

export class AsyncLocalStorageService {
  private readonly asyncLocalStorage: AsyncLocalStorage<Map<string, any>>;

  constructor() {
    this.asyncLocalStorage = new AsyncLocalStorage();
  }

  run(callback: () => void, initialData: Map<string, any> = new Map()) {
    this.asyncLocalStorage.run(initialData, callback);
  }

  getStore(): Map<string, any> | undefined {
    return this.asyncLocalStorage.getStore();
  }

  get(key: string): any {
    const store = this.getStore();
    return store ? store.get(key) : undefined;
  }

  set(key: string, value: any): void {
    const store = this.getStore();
    if (store) {
      store.set(key, value);
    }
  }
}