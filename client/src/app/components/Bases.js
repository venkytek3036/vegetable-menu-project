'use client';

import { useQuery } from '@apollo/client';

import { GET_BASE } from '../queries/clientQueries';

import withApollo from '../utils/withApollo';

const Bases = () => {
  const { loading, error, data } = useQuery(GET_BASE);

  if (loading) return <p>Loading bases...</p>;

  if (error) return <p>The food failed to load there is a problem</p>;

  return (
    <div>
      {!loading && !error && (
        <div className="base-box">
          <div>
            <div className="cost-container">
              <h1>01</h1>

              <p>$5.95 only one</p>
            </div>

            <h2>
              Chose <br />
              your base
            </h2>

            {data.bases.map((bases) => (
              <div key={bases.id}>
                <table>
                  <tr>
                    <td>
                      {bases.id} {bases.name}
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

export default withApollo(Bases);

