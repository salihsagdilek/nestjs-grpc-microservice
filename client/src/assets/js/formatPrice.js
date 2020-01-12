export function formatPrice (price) {
  return price.toFixed(2)
    .replace('.', ',')
    .replace(/\d(?=(\d{3})+,)/g, '$&\.')
}
