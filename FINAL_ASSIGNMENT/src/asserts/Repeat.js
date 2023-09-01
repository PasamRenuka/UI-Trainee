function App() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        style={{ margin: "6px" }}
      >
        <g
          clip-path="url(#a)"
          stroke="#485C72"
          strokewidth="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M11.5 2v3h-3" />
          <path d="M10.245 7.5a4.5 4.5 0 1 1-1.06-4.68L11.5 5" />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h12v12H0z" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default App;
