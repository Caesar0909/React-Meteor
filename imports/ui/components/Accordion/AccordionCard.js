import React from "react";

class AccordionCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open
    };
  }

  toggle = () => {
    this.setState(currentState => {
      return { open: !currentState.open };
    });
  };

  render() {
    const { data } = this.props;
    return (
      <div key={data._id} className="card card-default m-b-0">
        <div className="card-header " role="tab" id="headingOne">
          <h4 className="card-title">
            <a
              data-toggle="collapse"
              data-parent="#accordion"
              href="#"
              onClick={this.toggle}
              aria-expanded={this.state.open}
              aria-controls={`collapse${data._id}}`}
              className={this.state.open ? "" : "collapsed"}
            >
              {data.props.title}
            </a>
          </h4>
        </div>
        <div
          id="collapseOne"
          className={`collapse ${this.state.open ? "show" : ""}`}
          aria-labelledby="headingOne"
          aria-expanded="true"
        >
          <div className="card-block">{data}</div>
        </div>
        <style jsx="true">
          {`
            .collapse {
              max-height: 0px;
              visibility: hidden;
              opacity: 0;
              display: block;
              -webkit-transition: all 0.2s linear;
              -moz-transition: all 0.2s linear;
              -o-transition: all 0.2s linear;
              transition: all 0.2s linear;
            }
            .collapse.show {
              max-height: 100%;
              visibility: visible;
              opacity: 1;
            }
            .card .card-block {
              padding: 0px 20px 20px 20px;
            }
          `}
        </style>
      </div>
    );
  }
}

export default AccordionCard;
