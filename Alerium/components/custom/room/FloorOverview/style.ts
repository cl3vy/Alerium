const styles = {
  room:(i: boolean) => `transition-colors border w-[calc(100%/5)] aspect-square justify-center items-center ${i ? 'bg-red-700 text-stone-50 hover:bg-red-400' : 'hover:bg-stone-500'} `,
  empty: 'w-[calc(100%/7)]'
}
export default styles
