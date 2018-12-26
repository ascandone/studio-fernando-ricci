function dec(num){
  return Array.prototype.slice
    .call(num)
    .map(Number)
    .map(n => (n + 1) % 10)
    .join('')
}

const refs = {
  'phone': () => {
    const x = dec('9569381675')
    return [`${x.slice(0, 2)} - ${x.slice(2)}`, `tel:+39${x}`]
  },
  'mobile' : () => {
    const x = dec('2245789004')
    return [`${x.slice(0, 3)} - ${x.slice(3)}`, `tel:+39${x}`]
  },
}

for(const id in refs){
  const link = document.querySelector(`#${id} a`)
  const [html, href] = refs[id]()
  link.innerHTML = html
  link.href = href
}
