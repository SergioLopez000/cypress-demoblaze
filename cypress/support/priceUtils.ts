export function parsePrice(priceText: string): number {
    return parseInt(priceText.replace('$', ''));
}
