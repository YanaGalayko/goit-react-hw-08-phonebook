import { MagnifyingGlass } from 'react-loader-spinner';
import { LoaderStyled } from './LoaderStyled';

const Loader = () => {
return (
    <LoaderStyled>
<MagnifyingGlass
  visible={true}
  height="100"
  width="100"
  ariaLabel="MagnifyingGlass-loading"
  wrapperStyle={{}}
  wrapperClass="MagnifyingGlass-wrapper"
  glassColor = '#c0efff'
  color = '#e6dc55'
/>
    </LoaderStyled>
)
}

export default Loader