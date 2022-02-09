function PrivateRoute({ children, ...rest }) {
  // Get auth form state
  const role = "user";

  return (
    <Route
      {...rest}
      render={({ location }) =>
        role === "user" ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function AdminRoute({ children, ...rest }) {
  // Get auth form state
  const role = "admin";

  return (
    <Route
      {...rest}
      render={({ location }) =>
        role === "admin" ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
