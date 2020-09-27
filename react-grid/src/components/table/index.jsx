import React, { Component } from "react";
import TableForm from "./tableForm";
import TableGrid from "./tableGrid";
class Table extends Component {
  state = {
    tableData: { gridSize: "", stepsCount: "" },
    showTable: false,
    activeCell: 1,
    movesCount: 0,
    moves: []
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleMove);
  }

  handleInputChange = e => {
    const input = e.currentTarget;
    const tableData = this.state.tableData;
    tableData[input.name] = input.value;
    this.setState({ tableData });
  };

  
  handleSubmit = e => {
    e.preventDefault();
    const { tableData } = this.state;
    if (tableData.gridSize >= 2) {
      this.setState({ showTable: !this.state.showTable });
    } else {
      alert("Provide minimum grid count 2");
    }
  };

  render() {
    const { handleInputChange, handleSubmit, handleMove } = this;
    const { showTable, activeCell } = this.state;
    return (
      <>
        {!showTable && (
          <TableForm
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            tableData={this.state.tableData}
          />
        )}
        {showTable && (
          <>
            <div className="text-center mt-4 mb-4">
            </div>
            <TableGrid
              gridSize={this.state.tableData.gridSize}
              activeCell={activeCell}
              handleMove={handleMove}
            ></TableGrid>
          </>
        )}
      </>
    );
  }
}

export default Table;
