import { mailOptions, transporter } from "@config/nodemailer";
import { NextApiRequest, NextApiResponse } from "next";
import orgData from "../../data/organization.json";

export default async function contact(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method === 'POST') {
        const { Name, Email, Phone, Deadline, Budget, ProjectDetail } = req.body;

        await new Promise((resolve, reject) => {
            // verify connection configuration
            transporter.verify(function (error, success) {
                if (error) {
                    console.log(error);
                    reject(error);
                } else {
                    resolve(success);
                }
            });
        });

        const message = {
            ...mailOptions,
            subject: `${orgData.name} - New project inquiry from ${Name}(${Email})`,
            html: `
            <div>
                <b>Name:</b> ${Name}
            </div>
            <div>
                <b>Email:</b> <a href="mailto:${Email}" className="fw-medium">${Email}</a>
            </div>
            <div>
                <b>Phone: </b> <a href="tel:${Phone}" className="fw-medium">${Phone}</a>
            </div>
            <div>
                <b>Deadline:</b> ${Deadline}
            </div>
            <div>
                <b>Budget:</b> ${Budget}
            </div>
            <div>
                <b>Project Detail: </b> ${ProjectDetail}
            </div>
      `,
        };

        try {
            await new Promise((resolve, reject) => {
                // send mail
                transporter.sendMail(message, (err, info) => {
                    if (err) {
                        console.error(err);
                        reject(err);
                    } else {
                        console.log(info);
                        resolve(info);
                    }
                });
            });

            res.status(200).end();
        } catch (err) {
            res.status(500).json({ error: err });
        }
    } else {
        res.status(405).end();
    }
}
