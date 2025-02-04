import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import profile from "../../Assets/client-logo.gif";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-jsx.min";
import "./codedashboard.css"; // Include custom styles

import { IoIosGitNetwork } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { BsClipboard } from "react-icons/bs";
import { FaSquareJs } from "react-icons/fa6";
import { LuCode, LuCopy, LuDelete, LuDownload, LuPen } from "react-icons/lu";
const CodeEditor = () => {
  const [code, setCode] = useState(
    `import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move
        ? 'Go to move #' + move
        : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Game />);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}`
  );

  const [isEditable, setIsEditable] = useState(false);

  const highlightCode = (code) =>
    Prism.highlight(code, Prism.languages.jsx, "jsx");

  const lineCount = code.split("\n").length;
  const byteSize = new Blob([code]).size;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard");
  };

  const downloadFile = () => {
    const element = document.createElement("a");
    const file = new Blob([code], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "tictactoe.js";
    document.body.appendChild(element);
    element.click();
  };

  const toggleEdit = () => {
    setIsEditable(!isEditable);
  };

  return (
    <div>
      <div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center justify-between">
            <button className="btn ms-0">
              <div className="flex items-center justify-between">
                <IoIosGitNetwork className="mr-2" />
                <i style={{ fontStyle: "normal" }}>main</i>
                <FaChevronDown className="ml-2" />
              </div>
            </button>
            <h6 className="ms-2">react-mini-dashboards / TikTakToe.jsx</h6>
          </div>
          <div>
            <div className="flex items-center justify-between space-x-2">
              <button className="btn ">Find file</button>
              <button className="btn">Blame</button>
              <button className="btn">History</button>
              <button className="btn">Permalink</button>
            </div>
          </div>
        </div>
      </div>
      <div className="card my-3">
        <div className="card-body pt-1 pb-0">
          <div className="flex items-center justify-between">
            <div className="flex flex-row items-start justify-between">
              <img
                src={profile}
                alt="profile"
                style={{
                  width: "32px",
                }}
              />
              <div className="ms-2">
                <a href="#" className="text-dark link-info">
                  Update file index.html
                </a>
                <p>
                  <a href="#" className="text-dark link-info me-2">
                    John Doe
                  </a>
                  authored 17 minutes ago
                </p>
              </div>
            </div>
            <div className="card flex items-center flex-row p-2">
              dh47482wkw2
              <BsClipboard className="ml-2" />
            </div>
          </div>
        </div>
      </div>
      <div className="code-container">
        <div className="code-header">
          <div className="file-info">
            <span className="border px-2 rounded bg-white">Code</span>
            <span>·</span>
            <span>Blame</span>
          </div>
          <span>
            <FaSquareJs className="inline mr-2" />
            TikTakToe.jsx
          </span>
          <span>
            {lineCount} lines ({lineCount} loc) · {byteSize} Bytes
          </span>
          <div className="file-actions">
            <button
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              data-bs-title="Tooltip on bottom"
            >
              <i className="bi bi-backspace"></i>
              <LuDelete />
            </button>
            <button
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              data-bs-title="Tooltip on bottom"
            >
              <i className="bi bi-trash"></i>
            </button>
            <button
              onClick={copyToClipboard}
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              data-bs-title="Tooltip on bottom"
            >
              <LuCopy />
            </button>
            <button
              onClick={downloadFile}
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              data-bs-title="Tooltip on bottom"
            >
              <LuDownload />
            </button>
            <button
              onClick={toggleEdit}
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              data-bs-title="Tooltip on bottom"
            >
              <LuPen />
            </button>
            <button
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              data-bs-title="Tooltip on bottom"
            >
              <LuCode />
            </button>
          </div>
        </div>
        <div className="editor-wrapper">
          <Editor
            value={code}
            onValueChange={(code) => setCode(code)}
            highlight={highlightCode}
            padding={10}
            readOnly={!isEditable}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 16,
              backgroundColor: "#f5f5f5",
              minHeight: "400px",
              borderRadius: "4px",
              overflow: "auto",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
