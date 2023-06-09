'use client';

import { useQuery } from '@apollo/client';

import { GET_MEAT } from '../queries/clientQueries';

import withApollo from '../utils/withApollo';

const Meats = () => {
  const { loading, error, data } = useQuery(GET_MEAT);

  if (loading) return <p>Loading meats...</p>;

  if (error) return <p>The food failed to load there is a problem</p>;

  return (
    <div>
      {!loading && !error && (
        <div className="meat-box">
          <div>
            <div className="cost-container">
              <h1>03</h1>

              <p>$1.25 each 2 Max</p>
            </div>

            <h2>
              Choose <br /> your Meats
            </h2>

            {data.meats.map((meats) => (
              <div key={meats.id}>
                <table>
                  <tr>
                    <td>
                      {meats.id} {meats.name}
                    </td>
                  </tr>
                </table>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default withApollo(Meats);
