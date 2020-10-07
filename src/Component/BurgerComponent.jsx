import React, { Component } from 'react'
import { connect } from 'react-redux'

class BurgerComponent extends Component {
    renderBanh = () => {
        return Object.entries(this.props.soLuongTask).map(([tenBien, giaTri], index) => {
            let contentA = []
            for (let i = 0; i < giaTri; i++) {
                contentA.push(<div key={index} className={tenBien}></div>)
            }
            return contentA
        })
    }
    renderMenu = () => {
        return Object.entries(this.props.giaTaskBanh).map(([tenBien, giaTri], index) => {
            return (
                <tr key={index}>
                    <td>{tenBien}</td>
                    <td>
                        <button onClick={() => this.props.tangSoLuong(tenBien)} className="btn btn-success">+</button>
                        <span className="mx-2">
                            {this.props.soLuongTask[tenBien]}
                        </span>
                        <button onClick={() => this.props.giamSoLuong(tenBien)} className="btn btn-danger">-</button>
                    </td>
                    <td>{giaTri * this.props.soLuongTask[tenBien]}</td>
                </tr>
            )
        })
    }
    render() {
        return (
            <div className='container-fluid mt-3'>
                <div className="row">
                    <div className="col-6">
                        <div className="breadTop"></div>
                        {this.renderBanh()}
                        <div className="breadBottom"></div>
                    </div>
                    <div className="col-6">
                        <h3 className="text-center">Chọn thức ăn</h3>
                        <table className="table table-striped table-inverse">
                            <thead className="thead-inverse">
                                <tr>
                                    <th>Tên task</th>
                                    <th>Số lượng</th>
                                    <th>Thành tiền</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderMenu()}
                                <tr>
                                    <td colSpan='2'>
                                        <div className="text-center">Tổng tiền:</div>
                                    </td>
                                    <td>{this.props.totalTien}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        soLuongTask: state.BurgerCanLay.soLuongTaskBanh,
        giaTaskBanh: state.BurgerCanLay.giaTaskBanh,
        totalTien: state.BurgerCanLay.tongTien
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        tangSoLuong: (giaTri) => {
            const action = {
                type: 'TANG_SO_LUONG',
                taskCanTang: giaTri
            }
            dispatch(action)
        },
        giamSoLuong: (giaTri) => {
            const action = {
                type: 'GIAM_SO_LUONG',
                taskCanGiam: giaTri
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerComponent)
