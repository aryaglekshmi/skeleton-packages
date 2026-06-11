let _config = $state<any>({} as any);

const set = (cfg: any) => {
    _config = cfg;
}

export const configStore = {
    get config() {
        return _config;
    },
    set,
};
