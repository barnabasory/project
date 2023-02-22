import React, { useState, useEffect } from "react";
import styles from "./CCards.module.scss";
import { add, plus, minus } from "../../PAGES";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const CCards = ({ handleClick, message }) => {
  const [counts, setCounts] = useState(Array(message.length).fill(1));
  const [showSums, setShowSums] = useState(Array(message.length).fill(false));
  const [results, setResults] = useState(Array(message.length).fill(1));
  const [checkedCards, setCheckedCards] = useState(
    Array(message.length).fill(false)
  ); // new state variable

  const increaseCount = (index) => {
    setCounts(counts.map((count, i) => (i === index ? count + 1 : count)));
    setResults(
      results.map((result, i) => (i === index ? counts[i] + 1 : result))
    );
  };

  const decreaseCount = (index) => {
    setCounts(
      counts.map((count, i) => (i === index && count > 1 ? count - 1 : count))
    );
    setResults(
      results.map((result, i) =>
        i === index && result > 1 ? counts[i] - 1 : result
      )
    );
  };

  const toggleShowSum = (index) => {
    setShowSums(
      showSums.map((showSum, i) => (i === index ? !showSum : showSum))
    );
  };

  const toggleCardChecked = (index) => {
    // new function to toggle checked state
    setCheckedCards(
      checkedCards.map((isChecked, i) => (i === index ? !isChecked : isChecked))
    );
  };

  // re-renders the complete array when message arrays changes
  useEffect(() => {
    setCounts(Array(message.length).fill(1));
    setResults(Array(message.length).fill(1));
    setShowSums(Array(message.length).fill(false));
    setCheckedCards(Array(message.length).fill(false)); // initialize checked state
  }, [message]);

  // new function to get checked cards
  const getCheckedCards = () => {
    const checkedCardsIndexes = checkedCards.reduce((acc, isChecked, i) => {
      if (isChecked) {
        acc.push(i);
      }
      return acc;
    }, []);
    return checkedCardsIndexes.map((i) => message[i]);
  };
};
