import { Button } from "@material-ui/core";
import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

import { styles } from "./styles.js";
// import { connect } from "react-redux";

 class HomePage extends Component {

  render() {
    return (
      <div className="text-center">
        <h3>HomePage</h3>
          <Button
           variant="outlined" color="primary"

           className={this.props.classes.btnButton}
           
           >
              Button
          </Button>

          <Button
           variant="contained" 
           color="primary"

           >
              Nhạc của tui
          </Button>
      </div>
    );
  }
}

export default withStyles(styles) (HomePage);


// nếu connect thêm redux
// export default connect(mapStateToProps, mapDispatchToProps) (withStyles(styles) (HomePage));