const Page = ({ params }: { params: { address: string } }) => {
  return (
    <div className='text-white'>
      Wallet: {params.address}
    </div>
  )
}
export default Page