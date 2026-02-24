<div className={styles.dropdownMiddle}>
  {route.dropdownLeft && (
    <div className={styles.dropdownColumn}>
      {route.dropdownLeft.map((dropdownItem: any) => (
        <Link
          key={dropdownItem.text}
          href={buildHref(dropdownItem.path)}
          className={`${styles.dropdownItemFullWidth} ${
            bgIsDark ? "text-white" : "text-purple"
          } pointer`}
        >
          {t(dropdownItem.text)}
        </Link>
      ))}
    </div>
  )}

  {route.dropdownRight && (
    <div
      className={`${styles.dropdownColumn} ${
        bgIsDark ? styles.whiteLine : ""
      }`}
    >
      {route.dropdownRightTitle && (
        <Link
          href={buildHref(route.dropdownRightTitle.path)}
          className={`${styles.dropdownColumnTitle} ${
            bgIsDark ? "text-white" : "text-purple"
          } pointer`}
        >
          {t(route.dropdownRightTitle.text)}
        </Link>
      )}

      {route.dropdownRight.map((dropdownItem: any) => (
        <Link
          key={dropdownItem.text}
          href={buildHref(dropdownItem.path)}
          className={`${styles.dropdownItemFullWidth} ${
            bgIsDark ? "text-white" : "text-purple"
          } pointer`}
        >
          {t(dropdownItem.text)}
        </Link>
      ))}
    </div>
  )}

  {route.dropdown &&
    !route.dropdownLeft &&
    !route.dropdownRight && (
      <>
        {route.dropdown.map((dropdownItem: any) => (
          <Link
            key={dropdownItem.text}
            href={buildHref(dropdownItem.path)}
            className={`${styles.dropdownItemFullWidth} ${
              bgIsDark ? "text-white" : "text-purple"
            } pointer`}
          >
            {t(dropdownItem.text)}
          </Link>
        ))}
      </>
    )}
</div>
