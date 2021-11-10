import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson1";
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  function delay(d) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(1);
      }, d);
    });
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
      fetch(url)
        .then(async (resp) => {
          await delay(3000);
          if (resp.status >= 200 && resp.status <= 299) return resp.json();
          throw new Error("user not found");
        })
        .then((user) => {
          setUser(user);
        })
        .catch((error) => {
          setIsError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 3000);
  }, []);

  if (isLoading) {
    return <h4>Loading...</h4>;
  }

  if (isError) {
    return <h4>Error</h4>;
  }

  if (typeof user !== "string") {
    return (
      <div>
        <img src={user.avatar_url} alt={user.login} />
        <div>
          <h4>{user.login}</h4>
          <a href={user.html_url}>profile</a>
        </div>
      </div>
    );
  }

  return <div>no user here</div>;
};

export default MultipleReturns;
