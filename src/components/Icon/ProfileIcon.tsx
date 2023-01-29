function ProfileIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <defs>
        <path id="a" d="M0 0h12v6H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <g transform="translate(6 5)">
          <rect width="6" height="6" x="3" y="1" stroke="#FFF" strokeWidth="2" rx="3" />
          <g transform="translate(0 8)">
            <mask id="b" fill="#fff">
              <use xlinkHref="#a" />
            </mask>
            <rect width="10" height="10" x="1" y="1" stroke="#FFF" strokeWidth="2" mask="url(#b)" rx="5" />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default ProfileIcon;
