import React from 'react';
import {View, Text} from 'react-native';
import {Svg, Circle} from 'react-native-svg';

export const CircleProgress = props => {
  const {size, strokeWidth, text} = props;
  const radius = (size - strokeWidth) / 2;
  const circum = radius * 2 * Math.PI;
  const svgProgress = 100 - props.progressPercent;

  return (
    <View style={{margin: 10}}>
      <Svg width={size} height={size}>
        <Circle
          stroke={props.bgColor ? props.bgColor : '#f2f2f2'}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          {...{strokeWidth}}
        />

        <Circle
          stroke={props.pgColor ? props.pgColor : '#3b5998'}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={`${circum} ${circum}`}
          strokeDashoffset={radius * Math.PI * 2 * (svgProgress / 100)}
          strokeLinecap="round"
          transform={`rotate(-90, ${size / 2}, ${size / 2})`}
          {...{strokeWidth}}
        />

        <Text
          // fontSize={props.textSize ? props.textSize : '10'}
          // x={size / 2}
          // y={size / 2 + (props.textSize ? props.textSize / 2 - 1 : 5)}
          // textAnchor="middle"

          style={{
            alignSelf: 'center',
            textAlign: 'center',
            color: 'gray',
            fontSize: 10,
            fontFamily: 'B Yekan',
            marginTop:"30%"
          }}>
          {text}
        </Text>
      </Svg>
    </View>
  );
};
