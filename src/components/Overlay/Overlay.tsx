import React from "react";
import { CSSTransition } from "react-transition-group";

import { Colors } from "environment";
import { Link } from "components";
import { useActiveCell } from "hooks";
import {
  Container,
  CloseButton,
  H6,
  ChartRow,
  P,
  H7,
  Row,
  BreakLine,
  Span,
  Button,
  ChartsWrapper,
  Column,
} from "./Overlay.style";
import { TrendChart, BarChart } from "components/Charts";

import { chartData } from "./mock";

export function Overlay() {
  const [activeCell, setActiveCell] = useActiveCell();

  return (
    <CSSTransition
      className="fade-in"
      in={activeCell !== null}
      timeout={350}
      classNames="fade-in"
    >
      <Container>
        {/** absolutely pos */}
        <CloseButton onClick={() => setActiveCell(null)} />
        <H6>Harmonic Distortions chart</H6>
        <ChartsWrapper>
          <ChartRow margin="2rem 0 0 0">
            <TrendChart color={Colors.orange} data={chartData.trend[0]} />
            <Column margin="0 0 0 2rem">
              <P>THD V</P>
              <H6>11%</H6>
            </Column>
          </ChartRow>
          <ChartRow margin="1rem 0 0 0">
            <TrendChart color={Colors.alto} data={chartData.trend[1]} />
            <Column margin="0 0 0 2rem">
              <P>THD C</P>
              <H6>25%</H6>
            </Column>
          </ChartRow>
          <ChartRow style={{ flex: 2 }}>
            <BarChart
              colors={[Colors.orange, Colors.alto]}
              data={chartData.bar}
            />
          </ChartRow>
        </ChartsWrapper>
        <Row margin="2rem 0 0 0">
          <P>Country</P>
          <H7>Romania</H7>
        </Row>
        <Row>
          <P>Area</P>
          <H7>Timis (county)</H7>
        </Row>
        <Row>
          <P>Total aggregated devices</P>
          <H7>118</H7>
        </Row>
        <Row>
          <P>Time interval</P>
          <H7>past 48h</H7>
        </Row>
        <BreakLine />
        <Row margin={"0 0 0.8rem 0"} justifyContent="flex-start">
          <H6>Medium Risk</H6>
          <H7 margin="0 0 0 1.5rem">(Average quality)</H7>
        </Row>
        <Span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Span>
        <Link to="#">Read more</Link>
        <Row margin="auto 0 0 0">
          <Button>SHARE</Button>
        </Row>
      </Container>
    </CSSTransition>
  );
}
