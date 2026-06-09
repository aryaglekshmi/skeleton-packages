export const callWithDelay = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));

export const callTimeout = <T>(promise: Promise<T>, ms: number): Promise<T> => {
    const timer = new Promise<never>((_, reject) => setTimeout(() => reject(new Error('Timeout')), ms));
    return Promise.race([promise, timer]);
};

export const retry = async <T>(fn: () => Promise<T>, attempts = 3): Promise<T> => {
    let error;
    for (let i = 0; i < attempts; i++) {
        try {
            return await fn();
        } catch (e) {
            error = e;
        }
    }
    throw error;
};

export const allSettledValues = async <T>(promises: Promise<T>[]): Promise<T[]> => {
    const results = await Promise.allSettled(promises);
    return results
        .filter(r => r.status === 'fulfilled')
        .map(r => (r as PromiseFulfilledResult<T>).value);
};

export const withFallback = async <T>(promise: Promise<T>, fallback: T): Promise<T> => {
    try {
        return await promise;
    } catch {
        return fallback;
    }
};

export const runInSequence = async <T>(fns: (() => Promise<T>)[]): Promise<T[]> => {
    const results: T[] = [];
    for (const fn of fns) {
        try {
            results.push(await fn());
        } catch {
            results.push(null as unknown as T);
        }
    }
    return results;
};

export const runInParallel = async <T>(fns: (() => Promise<T>)[]): Promise<T[]> => {
    return Promise.all(fns.map(fn => fn().catch(() => null as unknown as T)));
};
