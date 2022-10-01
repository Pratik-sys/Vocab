import React from "react";
import axios from "axios";
import { SayButton } from "react-say";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

export const Vocab = () => {
  const [result, setResult] = useState([]);
  const getRandomDefination = () => {
    axios
      .get("https://random-word-api.herokuapp.com/word")
      .then((response) => {
        return response.data[0];
      })
      .then((word) => {
        axios
          .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
          .then((response) => {
            console.log(response.data);
            setResult(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getRandomDefination();
  }, []);
  return (
    <div className="Words">
      {result.length !== 0 ? (
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Subtitle>{JSON.stringify(result[0].word)} </Card.Subtitle>
            <Card.Text>
              {JSON.stringify(result[0].meanings[0].definitions[0].definition)}
              <br></br>
              {JSON.stringify(result[0].meanings[0].definitions[1].definition)}
            </Card.Text>
            <Card.Link>
              <SayButton
                onClick={(event) => console.log(event)}
                speak={result[0].word}
              >
                text-to-speech
              </SayButton>
            </Card.Link>
          </Card.Body>
        </Card>
      ) : // <p>
      //   {JSON.stringify(result[0])}{" "}
      //   <SayButton
      //     onClick={(event) => console.log(event)}
      //     speak={result[0].word}
      //   >
      //     bol
      //   </SayButton>
      // </p>
      null}
    </div>
  );
};
