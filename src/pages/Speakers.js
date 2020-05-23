import React, { useState, useEffect} from 'react';
import PageTitle from '../components/PageTitle/PageTitle';
import SectionSpeakers from '../components/SectionSpeakers/SectionSpeakers';
import SpeakersInfoBox from '../components/SpeakersInfoBox/SpeakersInfoBox';
import speakersMockedData from '../lib/speakers';
import Loader from '../components/Loader/Loader';
import SearchBar from '../components/SearchBar/SearchBar';

/* API calls */
import { getSpeakers } from '../api/speakers';


const Speakers = () => {
  const [speakers, setSpeakers] = useState([]);
  const [speakersSearch, setSpeakersSearch] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const changeHandler = search => {
    setSearchTerm(search.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getSpeakers(localStorage.getItem('token')).then(res => {
        setSpeakers(res.speakers);
      });
    }, 1000);
      
    const results = speakers.filter(person => person.title.toLowerCase().includes(searchTerm));
    if(results.length > 0){
      setSpeakersSearch(results);
    }
    else{
      getSpeakers(localStorage.getItem('token')).then(res => {
        setSpeakersSearch(res.speakers);
      });
    }
      
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const ShowSpeakers = () => {
    return speakersSearch.map((speaker, index) => (
      <SpeakersInfoBox
          key={index}
          title = {speaker.title}
          about = {speaker.about}
      />
    ))
  };

  return (
    <>
      <PageTitle title="Sudionici" />
      {speakers == "" ? <SearchBar active={true} change={changeHandler} placeholder={"Search speakers"} value={searchTerm} /> : <SearchBar active={false} change={changeHandler} placeholder={"Search speakers"} value={searchTerm} /> }
      <SectionSpeakers>
        {speakers == "" ? <Loader/> : ShowSpeakers()}
      </SectionSpeakers>
    </>
  );
}

export default Speakers;