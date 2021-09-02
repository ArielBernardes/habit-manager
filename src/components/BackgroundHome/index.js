import { BackGroundH } from "./styles";
import Clouds from "../../images/Clouds.png"

const HomeBackground = () => {
          return (
	  	<BackGroundH>
	  		<img src={Clouds} alt="background-home"></img>
		</BackGroundH>
	  )
}

export default HomeBackground;