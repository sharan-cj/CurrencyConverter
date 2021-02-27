import React, { useContext, useState, useEffect } from "react";
import { Container, Input, Label, Button, Error } from "../Components";
import styled from "styled-components";
import { CurrencyContext } from "../Utils";

export const Home = () => {
  const latestCurrencyRate = useContext(CurrencyContext);
  const [numberOfUnits, setNumberOfUnits] = useState(1);
  const [source, setSource] = useState<any>({ value: 0, name: "" });
  const [targets, setTargets] = useState<any>([{ value: 0, name: "" }]);

  const sourceHandler = (e: any) => {
    const Value = e.target.value;
    if (Value) {
      const [name, value] = Value.split(",");
      setSource({ value: parseInt(value).toFixed(4), name });
      // setTargets([{ value: 0, name: "" }]);
    }
  };

  const targetHandler = (e: any) => {
    const Value = e.target.value;
    if (Value) {
      const [name, value] = Value.split(",");
      const target = { value: parseInt(value).toFixed(4), name };
      if (
        targets.some((currency: any) => {
          return currency.name === name;
        })
      ) {
        return;
      } else {
        setTargets((prev: any) => [...prev, target]);
      }
    }
  };

  return (
    <Container width="100%">
      <div
        style={{ display: "flex", flexFlow: "row wrap", textAlign: "center" }}
      >
        <Container width="500px">
          <h2>Source</h2>

          <Select name="source" onChange={sourceHandler}>
            <option>Select a source</option>
            {latestCurrencyRate?.map((curreny: any) => {
              return <option value={curreny}>{curreny[0]}</option>;
            })}
          </Select>
          <Input
            name="numberOfUnits"
            onChange={(e) => setNumberOfUnits(parseInt(e.target.value))}
            placeholder="Enter number of units to be converted (default: 1)"
          />
        </Container>
        <Container width="500px">
          <h2>Target</h2>
          <Select name="target" onChange={targetHandler}>
            <option>Select a target</option>
            {latestCurrencyRate?.map((curreny: any) => {
              return <option value={curreny}>{curreny[0]}</option>;
            })}
          </Select>
          {source.name && <h2>{numberOfUnits + " " + source.name} = </h2>}
        </Container>
      </div>
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          margin: "1rem",
        }}
      >
        {targets.length >= 1 &&
          source &&
          targets.map((currency: any) => {
            const convertedValue = (
              (numberOfUnits / source.value) *
              currency.value
            ).toFixed(2);
            if (currency.name === "") {
              return;
            }
            return (
              <Capsule key={currency.name}>
                <h3>{convertedValue}</h3>
                <h4>{currency.name}</h4>
                <Remove
                  onClick={() => {
                    const local = [{ value: 0, name: "" }];
                    targets.forEach((curr: any) => {
                      if (curr.name === currency.name) {
                        return;
                      } else {
                        local.push(curr);
                      }
                    });
                    setTargets(local);
                  }}
                >
                  X
                </Remove>
              </Capsule>
            );
          })}
      </div>
    </Container>
  );
};

const Select = styled.select`
  margin: 1rem 0;
  width: 600px;
  max-width: 100%;
  padding: 0.5rem 1rem;
  background: rgb(0 0 0 / 25%);
  border: 1px solid #fdfdfd73;
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);

  outline: none;
  color: black;

  option {
    color: black;
  }
`;

const Capsule = styled(Container)`
  width: fit-content;
  min-width: 100px;
  color: black;
  margin: 1rem;
  background: #fff;
  position: relative;
  border-radius: 5px;
  padding: 10px;
  h4 {
    color: grey;
    margin: 0;
  }
  h3 {
    color: #121212;
    margin: 0;
  }
`;

const Remove = styled.button`
  background: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  text-align: center;
  font-size: 10px;
  color: white;
  background: #121212;
  position: absolute;
  top: -10px;
  right: -10px;
  border: none;
  cursor: pointer;
  outline: none;
  &:hover {
    transform: scale(1.2);
  }
`;
