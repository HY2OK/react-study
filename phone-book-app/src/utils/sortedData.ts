export const sortedData = (data: { name: string }[]) => {
  return data.sort((a, b) => {
    const nameA = a.name.toLowerCase()
    const nameB = b.name.toLowerCase()

    if (/^\d/.test(nameA) && !/^\d/.test(nameB)) {
      return 1 // 숫자가 문자보다 우선순위가 낮음
    } else if (!/^\d/.test(nameA) && /^\d/.test(nameB)) {
      return -1 // 문자가 숫자보다 우선순위가 높음
    } else {
      return nameA.localeCompare(nameB) // 숫자가 아닌 경우는 localeCompare로 비교
    }
  })
}
