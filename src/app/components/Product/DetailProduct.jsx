import { CharactProduct } from './CharactProduct';
import CommentProduct from './CommentProduct';
import { DescriptionDetailProduct } from './DescriptionDetailProduct';
import { DescriptionProduct } from './DescriptionProduct';

function DetailProduct({ product, token,comments,setComments }) {

  return (
    <div>
      <div className='flex flex-col gap-6 lg:hidden'>
        <DescriptionProduct text={product.description} />
        <CharactProduct product={product} />
        <CommentProduct product={product} token={token} comments={comments} setComments={setComments}  />
      </div>

      <div className='hidden lg:block'>
        <DescriptionDetailProduct product={product} token={token} comments={comments} setComments={setComments} />
      </div>

    </div>
  )
}

export default DetailProduct;