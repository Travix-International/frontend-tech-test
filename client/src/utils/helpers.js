export const parseBoolean = function(string) {
    var bool;
    bool = (function() {
        switch (false) {
            case string.toLowerCase() !== 'true':
                return true;
            case string.toLowerCase() !== 'false':
                return false;
        }
    })();
    if (typeof bool === "boolean") {
        return bool;
    }
    return void 0;
};