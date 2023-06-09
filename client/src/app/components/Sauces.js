'use client';

import { useQuery } from '@apollo/client';

import { GET_SAUCE } from '../queries/clientQueries';

import withApollo from '../utils/withApollo';

const Sauces = () => {
  const { loading, error, data } = useQuery(GET_SAUCE);

  if (loading) return <p>Loading sauces...</p>;

  if (error) return <p>The food failed to load there is a problem</p>;

  return (
    <div>
      {!loading && !error && (
        <div className="sauces-box">
          <div>
            <div className="cost-container">
              <h1>04</h1>

              <p>FREE</p>
            </div>

            <h2>
              Choose <br />
              your Sauces
            </h2>

            {data.sauces.map((sauces) => (
              <div key={sauces.id}>
                <table>
                  <tr>
                    <td>
                      {sauces.id} {sauces.name}
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

export default withApollo(Sauces);
