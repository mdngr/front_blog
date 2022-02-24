import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { useIntl } from "gatsby-plugin-intl"

const Pagination = ({ pageContext }) => {
    const { previousPagePath, nextPagePath, humanPageNumber, numberOfPages } = pageContext

    // Making useIntl available in the code
    const intl = useIntl()
    // Use language iso for the routes
    const locale = intl.locale !== "es" ? `/${intl.locale}` : ""

    return (
        <nav className="pagination" role="navigation">
            <div>
                {previousPagePath && (

                    <Link to={previousPagePath} rel="prev">
                            {intl.formatMessage({ id: "previous" })}
                    </Link>

                )}
            </div>
            {numberOfPages > 1 && <div className="pagination-location">{intl.formatMessage({ id: "page" })} {humanPageNumber} {intl.formatMessage({ id: "on" })} {numberOfPages}</div>}
            <div>
                {nextPagePath && (

                    <Link to={nextPagePath} rel="next">
                            {intl.formatMessage({ id: "next" })}
                    </Link>
                )}
            </div>
        </nav>
    )
}

Pagination.propTypes = {
    pageContext: PropTypes.object.isRequired,
}

export default Pagination
