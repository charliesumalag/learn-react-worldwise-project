import styles from "./CountryList.module.css";
import Spinner   from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";

const CountryList = ({ cities,  isLoading}) => {

  if(isLoading) return <Spinner />;

  if(!cities.length) return <Message message='Add your firstcity by clicking on a city on the map' />
  return (
    <ul className={styles.countriesList}>
      {cities.map((city) => (<CityItem city={city} key={city.id} />) )}
    </ul>
  )
}

export default CountryList
