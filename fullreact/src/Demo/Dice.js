import React, { useState } from "react";
import { Flex, Box, Text, List, ListItem } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { getNodeText } from "@testing-library/react";

const Mainnn = () => {
  let [gameStart, setGameStart] = useState(false);
  let [selectNum, setSelectNum] = useState();
  let [dice, setDice] = useState(1);
  let [error, setError] = useState("");
  let [score, setScore] = useState(0);

  let numbers = [1, 2, 3, 4, 5, 6];

  let StartGame = () => {
    // alert("niki");
    setGameStart(true);
  };

  console.log(selectNum);

  let OnNumClick = (value) => {
    setSelectNum(value);
    setError(null);
  };

  let genRandomNum = () => {
    if (selectNum) {
      let generatedNum = Math.ceil(Math.random() * 6);
      setDice(generatedNum);

      if (selectNum === generatedNum) {
        setScore((prev) => prev + generatedNum);
      } else {
        setScore((prev) => prev - 2);
      }
    } else {
      setError("please select Number");
    }
    <br></br>;

    // console.log(generatedNum);
  };
  return (
    <>
      {gameStart ? (
        <>
          {" "}
          <Stack>
            <Heading
              style={{
                textAlign: "center",
                marginTop: "45px",
                color: "#000000",
              }}
            >
              {error ? error : "Select Number"}
            </Heading>
            <Flex
              style={{
                textAlign: "center",
                justifyContent: "center",
                marginTop: 45,
                cursor: "pointer",
              }}
            >
              {numbers.map((value) => (
                <Flex
                  onClick={() => OnNumClick(value)}
                  bg={selectNum === value ? "green" : "black"}
                  key={value}
                  h="45px"
                  w="45px"
                  style={{
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    fontSize: 25,
                    fontWeight: 700,
                    marginRight: 35,
                    borderRadius: 55,
                    color: "white",
                  }}
                >
                  {value}
                </Flex>
              ))}
            </Flex>
            <br />
            <Box onClick={genRandomNum}>
              <Image
                src={`/Dice/dice${dice}.png`}
                style={{ marginLeft: "555px" }}
              ></Image>
              <br />
            </Box>

            <Text
              color={score > 0 ? "green" : "red"}
              style={{
                textAlign: "Center",
                justifyContent: "Center",
                fontSize: 55,
                fontWeight: 700,
              }}
            >
              {score}
            </Text>
            <Text
              style={{
                textAlign: "Center",
                justifyContent: "Center",
                fontSize: 30,
                fontWeight: 600,
                color: "#000000",
              }}
            >
              Total Score
            </Text>
            <Button
              backgroundColor="blackAlpha.800;"
              onClick={() => setScore()}
              style={{
                backgroundColor: "black",
                color: "white",
                width: 105,
                marginLeft: 575,
                marginTop: 12,
              }}
            >
              Reset Score
            </Button>
          </Stack>
          <Stack style={{ marginLeft: 15 }}>
            <Heading style={{ fontSize: 25 }}>Game Rules :-</Heading>
            <List>
              <ListItem>(1) Select any Number</ListItem>
              <ListItem>(2)Click on dice images to spin.</ListItem>
              <ListItem>
                (3) Select number is equal to dice reuslt then you will get same
                point of dice.
              </ListItem>
              <ListItem>
                (4) If you wrong score will be deducted bt 2 points.
              </ListItem>
            </List>
          </Stack>
        </>
      ) : (
        <Flex justify="center" align="center">
          <Image
            src="https://raw.githubusercontent.com/anshuopinion/dice-app/master/public/dices.png"
            style={{ width: "35%", marginLeft: "-345px", marginTop: 45 }}
          ></Image>

          <Stack style={{ marginLeft: 145 }}>
            <Heading fontSize="5xl" as="h1">
              Dice Game
            </Heading>
            <Button
              backgroundColor="blackAlpha.800;"
              onClick={() => StartGame()}
              style={{
                backgroundColor: "black",
                color: "white",
                width: 105,
                marginLeft: 55,
                marginTop: 12,
              }}
            >
              Game Start
            </Button>
          </Stack>
        </Flex>
      )}
    </>
  );
};

export default Mainnn;
