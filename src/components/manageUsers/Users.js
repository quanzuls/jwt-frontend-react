import { useState, useEffect } from "react";
import { fetchAllUsers } from '../../services/userServices';
import ReactPaginate from 'react-paginate';
const Users = () => {
    const [listUsers, setListUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentLimit, setCurrentLimit] = useState(3);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        fetchUsers();
    }, [currentPage])
    const fetchUsers = async () => {
        let response = await fetchAllUsers(currentPage, currentLimit);
        if (response && response.data && response.data.EC === 0) {
            setTotalPages(response.data.DT.totalPages);
            setListUsers(response.data.DT.users);

        }
    }
    const handlePageClick = async (event) => {
        setCurrentPage(+event.selected + 1);
    };

    const handleDeleteUser = async (user) => {
        console.log(">>check user: ", user);

    }
    return (
        <div className="container">
            <div className="manage-users-container">
                <div className="user-header">
                    <div className="title"><h3>Table Users</h3></div>
                    <div className="actions">
                        <a className="btn btn-success " role="button">Refresh </a>
                        <a className="btn btn-primary " role="button">Add new user </a>
                    </div>
                </div>
                <div className="user-body" >
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>

                                <th scope="col">Id</th>
                                <th scope="col">Email</th>
                                <th scope="col">Username</th>
                                <th scope="col">Group</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                            {listUsers && listUsers.length > 0 ?
                                <>
                                    {listUsers.map((user, index) => {
                                        return (
                                            <tr key={`row-${index}`}>
                                                <td>{index + 1}</td>
                                                <td>{user.id}</td>
                                                <td>{user.email}</td>
                                                <td>{user.username}</td>
                                                <td>{user.Group ? user.Group.description : ''}</td>
                                                <td>
                                                    <a class="btn btn-warning btn-sm mx-1">Edit</a>
                                                    <a class="btn btn-danger btn-sm"
                                                        onClick={() => handleDeleteUser(user)}
                                                        role="button">Delete</a>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </>
                                :
                                <>
                                    <tr><td>Not Found User</td></tr>
                                </>
                            }


                        </tbody>
                    </table>
                </div>
                {totalPages > 0 &&
                    <div className="user-footer">
                        <ReactPaginate
                            nextLabel="next >"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={3}
                            marginPagesDisplayed={2}
                            pageCount={totalPages}
                            previousLabel="< previous"
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            breakLabel="..."
                            breakClassName="page-item"
                            breakLinkClassName="page-link"
                            containerClassName="pagination"
                            activeClassName="active"
                            renderOnZeroPageCount={null}
                        />
                    </div>}

            </div>
        </div>
    )
}
export default Users;