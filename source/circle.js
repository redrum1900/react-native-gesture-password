import React, { PropTypes, Component } from "react";
import { StyleSheet, View } from "react-native";

export default class Circle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { color, fill, x, y, r, inner, outer } = this.props;

    return (
      <View
        style={[
          styles.outer,
          {
            left: x - r,
            top: y - r,
            width: 2 * r,
            height: 2 * r,
            borderRadius: r,
            borderWidth: 0
          },
          fill && { borderColor: color, borderWidth: 1 },
          !outer && { borderWidth: 0 }
        ]}
      >

        {inner &&
          <View
            style={[
              !outer && styles.inner,
              {
                width: 2 * r / 3,
                height: 2 * r / 3,
                borderRadius: r / 3,
                backgroundColor: "#D5E1E8"
              },
              fill && { backgroundColor: color }
            ]}
          />}
      </View>
    );
  }
}

Circle.propTypes = {
  color: PropTypes.string,
  fill: PropTypes.bool,
  x: PropTypes.number,
  y: PropTypes.number,
  r: PropTypes.number,
  inner: PropTypes.bool,
  outer: PropTypes.bool
};

Circle.defaultProps = {
  inner: true,
  outer: true
};

const styles = StyleSheet.create({
  outer: {
    position: "absolute",
    borderColor: "#8E91A8",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    zIndex: 10
  },
  inner: {
    backgroundColor: "#8E91A8",
    zIndex: 1
  }
});

module.exports = Circle; // for compatible with require only
