import { useId } from "react";

export function WarsaCool({
  fill1 = "#CDA998",
  fill2 = "#614B40",
}: {
  fill1?: string;
  fill2?: string;
}) {
  const id = useId();

  return (
    <svg
      viewBox="0 0 699 531"
      width={300}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath={`url(#clip${id})`}>
        <path
          d="M281.384 214.057L243.64 316.948H225.474L197.012 234.638L168.551 316.948H150.385L0 0H19.5778L160.075 295.762L188.335 214.057H206.098L234.559 295.964L262.411 214.057H281.384Z"
          fill={`url(#paint0_radial_${id})`}
        />
        <path
          d="M396.233 214.057V316.948H378.874V298.388C370.197 311.299 356.064 319.367 338.912 319.367C309.442 319.367 287.444 296.165 287.444 265.5C287.444 234.835 309.442 211.633 338.912 211.633C356.069 211.633 370.197 219.701 378.874 232.612V214.052H396.233V214.057ZM378.879 265.5C378.879 244.319 363.138 228.379 342.144 228.379C321.149 228.379 305.207 244.319 305.207 265.5C305.207 286.681 320.952 302.621 342.144 302.621C363.335 302.621 378.879 286.681 378.879 265.5Z"
          fill={`url(#paint1_radial_${id})`}
        />
        <path
          d="M481.618 212.439V230.395H478.189C456.388 230.395 443.067 244.113 443.067 265.5V531H425.708V214.057H443.067V231.811C450.736 219.505 462.847 212.444 478.189 212.444H481.618V212.439Z"
          fill={`url(#paint2_radial_${id})`}
        />
        <path
          d="M491.308 303.226L500.999 290.718C508.668 298.584 519.568 303.629 532.889 303.629C546.21 303.629 556.707 298.383 556.707 289.105C556.707 279.218 545.201 276.194 531.679 272.964C514.723 268.725 494.742 263.484 494.742 241.895C494.742 221.924 512.908 211.633 534.099 211.633C550.45 211.633 563.166 217.887 571.843 225.754L562.152 238.463C555.29 231.806 545.6 227.366 534.301 227.366C522.392 227.366 512.505 232.008 512.505 240.882C512.505 250.971 524.212 253.793 537.936 257.024C554.892 261.06 574.671 266.1 574.671 287.487C574.671 308.875 556.304 319.362 533.091 319.362C514.925 319.362 500.797 312.302 491.308 303.221V303.226Z"
          fill={`url(#paint3_radial_${id})`}
        />
        <path
          d="M699 214.057V316.948H681.641V298.388C672.964 311.299 658.831 319.367 641.678 319.367C612.209 319.367 590.211 296.165 590.211 265.5C590.211 234.835 612.213 211.633 641.678 211.633C658.836 211.633 672.964 219.701 681.641 232.612V214.052H699V214.057ZM681.646 265.5C681.646 244.319 665.9 228.379 644.91 228.379C623.921 228.379 607.973 244.319 607.973 265.5C607.973 286.681 623.714 302.621 644.91 302.621C666.106 302.621 681.646 286.681 681.646 265.5Z"
          fill={`url(#paint4_radial_${id})`}
        />
      </g>
      <defs>
        <radialGradient
          id={`paint0_radial_${id}`}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(301.468 201.937) scale(369.843 369.664)"
        >
          <stop stopColor={fill1} />
          <stop
            offset="1"
            stopColor={fill2}
          />
        </radialGradient>
        <radialGradient
          id={`paint1_radial_${id}`}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0.24587 201.937) scale(369.843 369.664)"
        >
          <stop stopColor={fill1} />
          <stop
            offset="1"
            stopColor={fill2}
          />
        </radialGradient>
        <radialGradient
          id={`paint2_radial_${id}`}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0.245796 201.937) scale(369.843 369.665)"
        >
          <stop stopColor={fill1} />
          <stop
            offset="1"
            stopColor={fill2}
          />
        </radialGradient>
        <radialGradient
          id={`paint3_radial_${id}`}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0.245833 201.937) scale(369.843 369.664)"
        >
          <stop stopColor={fill1} />
          <stop
            offset="1"
            stopColor={fill2}
          />
        </radialGradient>
        <radialGradient
          id={`paint4_radial_${id}`}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(301.468 201.937) scale(369.843 369.664)"
        >
          <stop stopColor={fill1} />
          <stop
            offset="1"
            stopColor={fill2}
          />
        </radialGradient>
        <clipPath id={`clip${id}`}>
          <rect
            width="699"
            height="531"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
