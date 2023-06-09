'use client';

import { useQuery } from '@apollo/client';

import { GET_VEGETABLE } from '../queries/clientQueries';

import withApollo from '../utils/withApollo';

const Vegetables = () => {
  const { loading, error, data } = useQuery(GET_VEGETABLE);

  if (loading) return <p>Loading vegetables...</p>;

  if (error) return <p>The food failed to load there is a problem</p>;

  return (
    <div>
      {!loading && !error && (
        <div className="vegetable-box">
          <div>
            <div className="cost-container">
              <h1>02</h1>

              <p>$1.25 each 4 Max</p>
            </div>

            <h2>
              Choose <br />
              your Vegetables
            </h2>

            {data.vegetables.map((vegetables) => (
              <div key={vegetables.id}>
                <table>
                  <tr>
                    <td>
                      {vegetables.id} {vegetables.name}
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

export default withApollo(Vegetables);
