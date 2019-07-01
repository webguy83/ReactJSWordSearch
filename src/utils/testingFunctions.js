export const elementAttr = (wrapper, value) => {
    return wrapper.find(`[data-test="${value}"]`);
}